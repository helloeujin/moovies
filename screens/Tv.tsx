import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  InteractionManager,
} from "react-native";
import { useQuery } from "react-query";
import { tvAPI } from "../api";
import HList, { HListSeperator } from "../components/HList";
import Loader from "../components/Loader";
import VMedia from "../components/VMedia";

const Tv = () => {
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

  const loading = todayLoading || topLoading || trendingLoading;
  if (loading) {
    <Loader />;
  }

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 30 }}>
      <HList title="Trending TV" data={trendingData?.results} />
      <HList title="Airing Today" data={todayData?.results} />
      <HList title="Top Rated TV" data={topData?.results} />
    </ScrollView>
  );
};

export default Tv;
