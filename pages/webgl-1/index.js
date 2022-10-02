import React from "react";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./rect'),
  { ssr: false }
)

export default (props) => {
  return <DynamicComponentWithNoSSR />
}