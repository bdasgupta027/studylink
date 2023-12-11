// MyStudyGroupsCollection.jsx

import React, { useEffect, useState } from 'react';
import StandardCard from './StandardCard';
import { Collection, Pagination, Placeholder } from '@aws-amplify/ui-react';
import { getOverrideProps } from './utils';

const nextToken = {};
const apiCache = {};

const MyStudyGroupsCollection = (props) => {
  const { members, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [items, setItems] = useState([]);
  const [isApiPagination, setIsApiPagination] = useState(false);
  const [instanceKey, setInstanceKey] = useState('newGuid');
  const [loading, setLoading] = useState(true);
  const [maxViewed, setMaxViewed] = useState(1);
  const pageSize = 6;
  const isPaginated = true;

  useEffect(() => {
    nextToken[instanceKey] = '';
    apiCache[instanceKey] = [];
  }, [instanceKey]);

  useEffect(() => {
    setIsApiPagination(!!!members);
  }, [members]);

  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };

  const loadPage = (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(false); // Assuming all data is provided upfront
    setLoading(false);
  };

  useEffect(() => {
    const loadMyStudyGroups = () => {
      loadPage(pageIndex);
    };

    loadMyStudyGroups();
  }, [pageIndex]);

  useEffect(() => {
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
        items={members || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, 'MyStudyGroupsCollection')}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <StandardCard
              studyGroupCard={item}
              margin="0 15px 15px 0"
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></StandardCard>
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
};

export default MyStudyGroupsCollection;
