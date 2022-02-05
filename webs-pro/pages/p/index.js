import prisma from '../../lib/prisma.ts';

export const getStaticProps = async () => {
    const feed = await prisma.Post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return { props: { feed } };
};

const p = ({feed}) => {
    return (  
        <div>   
         {feed}
        </div>
    );
}
 
export default p;