import { GetStaticPaths, GetStaticProps  } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

interface BlogPost {
     slug: string;
     title: string;
     excert: string;
     content: string;
     image: string;
}

interface BlogProps {
     post: BlogPost;
}
export default function BlogPost({ post }: BlogProps){
const router = useRouter();

if (router.isFallback) {
     return <div className="text-4xl text-center">Loading...</div>;
}
return (
     <div className="container mx-auto px-4 py-8">
          <Head>
               <title>{post.title} | Blog SEO</title>
               <meta name="description" content={post.excert} />
               <meta property="og:title" content={post.title} />
               <meta property="og:description" content={post.excert} />
               <meta property="og:image" content={post.image} />
               <meta property="og:url" content={`https://www.example.com/blog/${post.slug}`} />
               <meta name="twitter:card" content="summary_large_image" />
               </Head>
               <h1 className="text-4xl font-bold">{post.title}</h1>
               <p className="text-gray-800">{post.content}</p>
     </div>
);
}


export const getStaticPaths: GetStaticPaths = async () => {
     return {
          paths: [{ params: { slug: "my-first-post" } }],
          fallback: true,
     };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
     const post: BlogPost = {
          slug: "my-first-post",
          title: "My First Post",
          excert: "This is my first blog post.",
          content: "This is my first blog post. It's not much, but it's a start.",
          image: "https://via.placeholder.com/150",
     };
     return {
          props: { post },
     };
};