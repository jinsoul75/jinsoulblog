import { allBlogs } from 'contentlayer/generated';

export const allBlogPosts = [...allBlogs].sort((a, b) => {
  const dateA = new Date(a.date.split('T')[0]);
  const dateB = new Date(b.date.split('T')[0]);
  return dateB.getTime() - dateA.getTime();
});

export const allSeriesPosts = [...allBlogPosts].filter(
  (blogPost) => blogPost.isSeries,
);

export const postYears = [
  ...new Set(
    [...allBlogPosts]
      .map((blogPost) => blogPost.slugAsParams.split('/')[0])
      .filter((postYears) => Number(postYears)),
  ),
];

export const getPostsByYear = (postYear: string) => {
  return [...allBlogPosts].filter(
    (blogPost) => blogPost.slugAsParams.split('/')[0] === postYear,
  );
};

export const getSeriesPostsBySlug = (slug: string) =>
  [...allSeriesPosts].filter(
    (blogPost) => blogPost.slugAsParams.split('/')[1] === slug,
  );

export const getBlogPostBySlug = (slug: string) =>
  allBlogPosts.find(
    (blog) => blog.slugAsParams.split('/').slice(-1)[0] === slug,
  );

export const getPrevPostBySlug = (slug: string) => {
  const index = allBlogPosts.findIndex(
    (blog) => blog.slugAsParams.split('/').slice(-1)[0] === slug,
  );
  return allBlogPosts[index + 1];
};

export const getNextPostBySlug = (slug: string) => {
  const index = allBlogPosts.findIndex(
    (blog) => blog.slugAsParams.split('/').slice(-1)[0] === slug,
  );
  return allBlogPosts[index - 1];
};

export const recentPosts = allBlogPosts.slice(0, 4);

export const getPostsByTag = (tag: string) =>
  [...allBlogPosts].filter((post) => post.tags.includes(decodeURI(tag)));

export const allTags = Array.from(
  new Set([...allBlogPosts].map((blogPost) => blogPost.tags).flat()),
);
