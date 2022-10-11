import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  InteractionManager,
  RefreshControl,
} from "react-native";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { tvAPI } from "../api";
import HList, { HListSeperator } from "../components/HList";
import Loader from "../components/Loader";
import VMedia from "../components/VMedia";

const Tv = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: todayLoading,
    data: todayData,
    isRefetching: todayRefetching,
  } = useQuery(["tv", "today"], tvAPI.airingToday);
  const {
    isLoading: topLoading,
    data: topData,
    isRefetching: topRefetching,
  } = useQuery(["tv", "top"], tvAPI.topRated);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: trendingRefetching,
  } = useQuery(["tv", "trending"], tvAPI.trending);

  const onRefresh = () => {
    queryClient.refetchQueries(["tv"]);
  };

  const loading = todayLoading || topLoading || trendingLoading;
  const refreshing = todayRefetching || topRefetching || trendingRefetching;

  if (loading) {
    <Loader />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      <HList title="Trending TV" data={trendingData?.results} />
      <HList title="Airing Today" data={todayData?.results} />
      <HList title="Top Rated TV" data={topData?.results} />
    </ScrollView>
  );
};

export default Tv;
