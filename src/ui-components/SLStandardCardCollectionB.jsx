/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listStudyGroupCards } from "../graphql/queries";
import StandardCard from "./StandardCard";
import { getOverrideProps } from "./utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

const buttonStyle = {
  marginTop: '20px',
  display: 'inline-block',
  padding: '5px 10px',
  width: '200px',
  fontSize: '24px',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none',
  outline: 'none',
  color: '#fff',
  backgroundColor: '#047D95',
  border: 'none',
  borderRadius: '5px',
  fontWeight: "bold",
  margin: "10px 20px"
}

async function addMember() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);

    const existingMembersResponse = await API.graphql({
      query: listMemberCards,
      variables: {
        filter: {
          studyGroupId: {
            eq: id,
          },
          userId: {
            eq: user.attributes.sub,
          },
        },
      },
    });

    const existingMembers = existingMembersResponse.data.listMemberCards.items;

    if (existingMembers.length > 0) {
      setIsJoined(true);
      console.log('Member card already exists for the user in this study group.');
    } else {
      const newMember = {
        id: uuid.v4(),
        username: user.attributes.email,
        userId: user.attributes.sub,
        studyGroupId: id,
      };

      console.log('NEW MEMBER', newMember);

      await API.graphql({
        query: CreateMemberCardMutation,
        variables: { input: newMember },
      });

      console.log('created');

      setIsJoined(true);

      // Call fetchMembers after the user joins the group
      fetchMembers();
    }
  } catch (err) {
    console.log(err);
  }
}

const nextToken = {};
const apiCache = {};
export default function StandardCardCollectionB(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 6;
  const isPaginated = true;
  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);
  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);
  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };
  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];
    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        limit: pageSize,
        filter: { acceptingMembers: { eq: true } },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listStudyGroupCards.replaceAll("__typename", ""),
          variables,
        })
      ).data.listStudyGroupCards;
      newCache.push(...result.items);
      newNext = result.nextToken;
    }
    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };
  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);
  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);
  return (
    <div>
      <Collection
        type="grid"
        isSearchable={true}
        searchPlaceholder="Search..."
        templateColumns="1fr 1fr 1fr"
        autoFlow="row"
        alignItems="stretch"
        justifyContent="stretch"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "StandardCardCollectionB")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <div style={{cursor: "pointer"}}>
              <StandardCard
                studyGroupCard={item}
                height="auto"
                width="auto"
                margin="0 15px 15px 0"
                key={item.id}
                {...(overrideItems && overrideItems({ item, index }))}
              ></StandardCard>
              <button style={buttonStyle} onClick={addMember}>Join Group</button>
            </div>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
