// MemberDetailsPopup.js
import React, { useEffect, useState } from 'react';
import { Flex, Text, Image } from '@aws-amplify/ui-react';
import Modal from 'react-modal';
import { API } from 'aws-amplify';
import { getProfileCard } from './graphql/queries';

// Custom styles for the modal
const customStyles = {
  content: {
    width: '300px', // Set the desired width
    height: 'auto', // Set the desired height or 'auto'
    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MemberDetailsPopup = ({ isOpen, onClose, member }) => {
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await API.graphql({
          query: getProfileCard,
          variables: { id: member.userId },
        });
        const fetchedMemberDetails = response.data.getProfileCard;
        setMemberDetails(fetchedMemberDetails);
      } catch (error) {
        console.error('Error fetching member details:', error);
      }
    };

    if (isOpen && member) {
      fetchMemberDetails();
    }
  }, [isOpen, member]);

  const closeModal = () => {
    setMemberDetails(null);
    onClose();
  };

  if (!isOpen || !member || memberDetails === null) {
    return null; // You can return a loading state or nothing if the required data is not available
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Member Details"
    >
      <Flex direction="column" gap="16px" padding="16px">
        <Text fontSize="20px" fontWeight="700">
          {`${memberDetails.firstName} ${memberDetails.lastName}`}
        </Text>
        <Text fontSize="16px">{`Major: ${memberDetails.major}`}</Text>
        {memberDetails.image && (
          <Image src={memberDetails.image} alt="Member Image" width="100px" height="100px" />
        )}
      </Flex>
    </Modal>
  );
};

export default MemberDetailsPopup;
