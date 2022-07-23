import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";
import { AppBar } from "../components/layout/AppBar";
import WalletContextProvider from "../src/contexts/WalletContextProvider";

export const getStaticProps = async () => {
  //pull in reservations that belong to this waitlist id
  const reservations = await prisma.reservation.findMany({
    where: { waitlistId: "cl54nvsat007435ya98j1ocss" },
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
    props: { reservations },
    revalidate: 10,
  };
};

export default function Home() {
  return (
    <div className={styles.container}>
      <WalletContextProvider>
        <AppBar />
      </WalletContextProvider>
    </div>
  );
}
