import { Descope } from "@descope/react-sdk";

export default function Auth() {
  return (
    <Descope
      flowId="sign-up-or-in"
      theme="light"
      onSuccess={(e) => {
        console.log(e.detail.user?.name);
        console.log(e.detail.user?.email);
      }}
      onError={(err) => {
        console.log("Error!", err);
      }}
    />
  );
}
