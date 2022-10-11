import React, { useState } from "react";
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
  const [refreshing, setRefreshing] = useState(false);

  const { isLoading: todayLoading, data: todayData } = useQuery(
    ["tv", "today"],
    tvAPI.airingToday
  );
  const { isLoading: topLoading, data: topData } = useQuery(
    ["tv", "top"],
    tvAPI.topRated
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["tv", "trending"],
    tvAPI.trending
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  };

  const loading = todayLoading || topLoading || trendingLoading;

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
