import { gql } from "graphql-request";

export const Asset = gql`
  query Asset($where: AssetWhereUniqueInput!) {
    asset(where: $where) {
      id
      createdAt
      updatedAt
      publishedAt
      handle
      fileName
      height
      width
      size
      mimeType
      url
    }
  }
`;

export const Items = gql`
  query Items(
    $where: ItemWhereInput
    $orderBy: ItemOrderByInput
    $before: String
    $after: String
  ) {
    items(where: $where, orderBy: $orderBy, before: $before, after: $after) {
      id
      createdAt
      updatedAt
      publishedAt
      title
      category
      description
      thumbnail {
        id
        createdAt
        updatedAt
        publishedAt
        handle
        fileName
        height
        width
        size
        mimeType
        url
      }
      body {
        html
        markdown
        text
      }
      content {
        id
        createdAt
        updatedAt
        publishedAt
        title
        url
      }
    }
  }
`;

export const Item = gql`
  query Item($where: ItemWhereUniqueInput!) {
    item(where: $where) {
      id
      createdAt
      updatedAt
      publishedAt
      title
      category
      description
      thumbnail {
        id
        createdAt
        updatedAt
        publishedAt
        handle
        fileName
        height
        width
        size
        mimeType
        url
      }
      body {
        html
        markdown
        text
      }
      content {
        id
        createdAt
        updatedAt
        publishedAt
        title
        url
      }
    }
  }
`;

export const Pickups = gql`
  query Pickups(
    $where: PickupWhereInput
    $orderBy: PickupOrderByInput
    $before: String
    $after: String
  ) {
    pickups(where: $where, orderBy: $orderBy, before: $before, after: $after) {
      id
      createdAt
      updatedAt
      publishedAt
      title
      url
    }
  }
`;

export const Staffs = gql`
  query Staffs(
    $where: StaffWhereInput
    $orderBy: StaffOrderByInput
    $before: String
    $after: String
  ) {
    staffs(where: $where, orderBy: $orderBy, before: $before, after: $after) {
      id
      createdAt
      updatedAt
      publishedAt
      author
      name
      avatar
      link {
        id
        createdAt
        updatedAt
        publishedAt
        name
        url
        category
      }
      work {
        id
        createdAt
        updatedAt
        publishedAt
        name
      }
    }
  }
`;

export const TermsOfUses = gql`
  query TermsOfUses(
    $where: TermsOfUseWhereInput
    $orderBy: TermsOfUseOrderByInput
    $before: String
    $after: String
  ) {
    termsOfUses(
      where: $where
      orderBy: $orderBy
      before: $before
      after: $after
    ) {
      id
      createdAt
      updatedAt
      publishedAt
      sort
      title
      body {
        html
        markdown
        text
      }
    }
  }
`;
