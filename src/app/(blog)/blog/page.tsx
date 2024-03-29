import { Metadata } from 'next';

import { allBlogPosts } from '@/constants/dataset';

import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import Paragraph from '@/components/common/Paragraph';
import PostList from '@/components/common/PostList';
import SeriesCard from '@/components/card/SeriesCard';
import SearchBar from '@/components/searchBar/SearchBar';

export const metadata: Metadata = {
  title: 'Jinsoul Blog',
  description: '프론트엔드 세계를 탐구합니다.',
};

export default function BlogPage() {
  return (
    <>
      <Title>Blog</Title>
      <Paragraph className="pb-4">프론트엔드 세계를 탐구합니다.</Paragraph>
      <SearchBar />
      <SubTitle>Series</SubTitle>
      <SeriesCard />
      <SubTitle>All Posts ({allBlogPosts.length})</SubTitle>
      <PostList posts={allBlogPosts} />
    </>
  );
}
