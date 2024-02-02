import Link from 'next/link';
import PostItem from './PostItem';
import { thumbnailCategory } from '@/constants/menu';
import dayjs from 'dayjs';

export default function PostList({ posts }) {
  const className =
    'grid grid-cols-2 border-t border-t-black border-l border-l-black';

  return (
    <section className={className}>
      {posts.map((post) => {
        const isWithThumbnail = thumbnailCategory.includes(
          post.slug.split('/')[1],
        );

        const formatDate = dayjs(post.date).format('YY.MM.DD');

        return (
          <PostItem key={post._id} slug={post.slug}>
            <Link href={post.slug}>
              {isWithThumbnail && (
                <PostItem.PostThumbnail thumbnailUrl={post.thumbnail} />
              )}
            </Link>
            <div className='p-2'>
              <Link href={post.slug}>
                <PostItem.PostTitle title={post.title} />
              </Link>
              <div className="flex mt-8">
                <div className="grow">
                  <PostItem.PostTags tags={post.tags} />
                </div>
                <div className="flex text-sm">
                  <PostItem.PostDate date={formatDate} />
                  <PostItem.PostReadingTime
                    readingTime={post.readingTime.text}
                  />
                </div>
              </div>
            </div>
          </PostItem>
        );
      })}
    </section>
  );
}
