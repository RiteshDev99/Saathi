import {StatusBar, Text, TextInput, View, FlatList, TouchableOpacity, ActivityIndicator} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router, Stack, useLocalSearchParams} from "expo-router";
import React, {useRef, useEffect, useState} from "react";
import {Entypo, Ionicons} from "@expo/vector-icons";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPickupLocation, setDropLocation} from '@/src/store/feature/locationFetchSlice'

export type searchParams = {
    query: string;
    lat: number;
    lon: number;
}

type SearchResult = {
    placeId: string;
    description: string;
    name: string;
}

export default function SearchScreen() {
    const textInputRef = useRef<TextInput>(null);
    const {PlaceHolderName} = useLocalSearchParams<{ PlaceHolderName: string }>();
    const {fieldType} = useLocalSearchParams<{ fieldType: "pickup" | "drop" }>();
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            textInputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (query.trim().length > 3) {
            const debounceTimer = setTimeout(() => {
                performSearch();
            }, 300);

            return () => clearTimeout(debounceTimer);
        } else {
            setResults([]);
        }
    }, [query]);


    async function handleSearch({
                                    query,
                                    lat,
                                    lon
                                }: searchParams) {
        try {
            setLoading(true);

            const response = await axios.get(
                "https://loca-api.maya-cloud.workers.dev/search",
                {
                    params: {
                        q: query,
                        lat: lat,
                        lon: lon,
                    },
                }
            );

            console.log("API Response:", response.data);

            if (response.data?.success && response.data?.data?.data) {
                setResults(response.data.data.data);
            }

            return response.data;
        } catch (error) {
            console.error("Search error:", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    }

    const performSearch = async () => {
        if (query.trim()) {
            await handleSearch({
                query: query.trim(),
                lat: 22.7196,
                lon: 75.8577
            });
        }
    };

    const handleResultPress = (result: SearchResult, fieldType: "pickup" | "drop") => {
        router.push({
            pathname: "/(drawer)/(tabs)",
        });

        if (fieldType === "pickup") {
            dispatch(setPickupLocation(result.name));
        } else if (fieldType === "drop") {
            dispatch(setDropLocation(result.name));
        }
    };


    const clearSearch = () => {
        setQuery("");
        setResults([]);
        textInputRef.current?.focus();
    };

    const renderSearchResult = ({item}: { item: SearchResult }) => (
        <TouchableOpacity
            className="flex-row items-center px-4 py-3 border-b border-gray-100"
            onPress={() => handleResultPress(item, fieldType)}
        >
            <Ionicons name="location-outline" size={20} color="#666"/>
            <View className="ml-3 flex-1">
                <Text className="text-base font-medium text-gray-800">{item.name}</Text>
                <Text className="text-sm text-gray-500 mt-1" numberOfLines={2}>
                    {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                    animation: "fade_from_bottom",
                }}
            />

            <StatusBar backgroundColor="#2E8BC0" barStyle="dark-content"/>

            <SafeAreaView className="flex-1 bg-white">
                <View className="flex-row items-center justify-between border-b border-gray-200 px-4 pb-4 pt-4">
                    <View className="flex-row items-center flex-1">
                        <Ionicons
                            size={25}
                            name="arrow-back-outline"
                            color="black"
                            onPress={() => router.dismiss()}
                            style={{marginRight: 12}}
                        />
                        <TextInput
                            ref={textInputRef}
                            placeholder={PlaceHolderName}
                            className="flex-1 text-lg text-gray-800 py-2 px-2"
                            placeholderTextColor="#9CA3AF"
                            autoFocus={true}
                            returnKeyType="search"
                            clearButtonMode="while-editing"
                            selectTextOnFocus={true}
                            value={query}
                            onChangeText={setQuery}
                            onSubmitEditing={performSearch}
                        />
                    </View>
                    {query.length > 0 && (
                        <Entypo
                            size={25}
                            name="cross"
                            color="black"
                            onPress={clearSearch}
                            style={{marginLeft: 12}}
                        />
                    )}
                </View>


                <View className="flex-1">
                    {loading && (
                        <View className="px-4 py-3 flex-row justify-center">
                            <ActivityIndicator size='small' color={'black'}/>
                        </View>
                    )}

                    {!loading && results.length > 0 && (
                        <FlatList
                            data={results}
                            renderItem={renderSearchResult}
                            keyExtractor={(item) => item.placeId}
                            showsVerticalScrollIndicator={false}
                        />
                    )}

                    {!loading && query.length > 2 && results.length === 0 && (
                        <View className="px-4 py-8 items-center">
                            <Ionicons name="search-outline" size={48} color="#ccc"/>
                            <Text className="text-gray-500 mt-2">No results found</Text>
                            <Text className="text-gray-400 text-sm mt-1">
                                Try a different search term
                            </Text>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </>
    );
}

