import prisma from "../../../lib/prisma";

export const getServerSideProps = async ({ params }) => {
  //pull in reservation based on id
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true, id: true },
      },
      waitlist: {
        select: { id: true, restaurantId: true },
      },
    },
  });

  return {
    props: reservation,
  };
};
