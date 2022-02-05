import prisma from '../../lib/prisma'


export const getServerSideProps = async ({ params }) => {
    const post = await prisma.Post.findUnique({
      where: {
        id: Number(params?.id) || -1,
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return {
      props: post,
    };
  };