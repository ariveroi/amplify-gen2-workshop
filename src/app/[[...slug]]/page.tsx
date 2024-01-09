"use client";
import React from "react";
import dynamic from "next/dynamic";

//Amplify configuration
import { Amplify } from "aws-amplify";
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config);

const App = dynamic(() => import("../../App"), { ssr: false });

export default function Page() {
  return <App />;
}
