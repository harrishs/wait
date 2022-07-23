import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar = (props) => {
  return (
    <div>
      {/* {Navbar header} */}
      <div>
        <WalletMultiButton />
      </div>
    </div>
  );
};
