import { Skeleton } from "antd"
import styled from "styled-components"

const SkeletonStyled = styled.div`
  width: 100%;
  height: 100%;
  .ant-skeleton {
    width: 100% !important;
    height: 100% !important;
    .ant-skeleton-avatar {
      width: 100% !important;
      height: 100% !important;
    }
  }
`
const SkeletonSquare = () => {
  return (
    <SkeletonStyled style={{ width: "100%" }}>
      <Skeleton.Avatar active shape="square" size="large" />
    </SkeletonStyled>
  )
}

export default SkeletonSquare
