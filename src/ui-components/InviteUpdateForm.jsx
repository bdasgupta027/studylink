/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getInvite } from "../graphql/queries";
import { updateInvite } from "../graphql/mutations";
export default function InviteUpdateForm(props) {
  const {
    id: idProp,
    invite: inviteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sender: "",
    receiver: "",
    studygroupid: "",
  };
  const [sender, setSender] = React.useState(initialValues.sender);
  const [receiver, setReceiver] = React.useState(initialValues.receiver);
  const [studygroupid, setStudygroupid] = React.useState(
    initialValues.studygroupid
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = inviteRecord
      ? { ...initialValues, ...inviteRecord }
      : initialValues;
    setSender(cleanValues.sender);
    setReceiver(cleanValues.receiver);
    setStudygroupid(cleanValues.studygroupid);
    setErrors({});
  };
  const [inviteRecord, setInviteRecord] = React.useState(inviteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getInvite.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInvite
        : inviteModelProp;
      setInviteRecord(record);
    };
    queryData();
  }, [idProp, inviteModelProp]);
  React.useEffect(resetStateValues, [inviteRecord]);
  const validations = {
    sender: [{ type: "Email" }],
    receiver: [{ type: "Email" }],
    studygroupid: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          sender: sender ?? null,
          receiver: receiver ?? null,
          studygroupid: studygroupid ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateInvite.replaceAll("__typename", ""),
            variables: {
              input: {
                id: inviteRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InviteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Sender"
        isRequired={false}
        isReadOnly={false}
        value={sender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sender: value,
              receiver,
              studygroupid,
            };
            const result = onChange(modelFields);
            value = result?.sender ?? value;
          }
          if (errors.sender?.hasError) {
            runValidationTasks("sender", value);
          }
          setSender(value);
        }}
        onBlur={() => runValidationTasks("sender", sender)}
        errorMessage={errors.sender?.errorMessage}
        hasError={errors.sender?.hasError}
        {...getOverrideProps(overrides, "sender")}
      ></TextField>
      <TextField
        label="Receiver"
        isRequired={false}
        isReadOnly={false}
        value={receiver}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sender,
              receiver: value,
              studygroupid,
            };
            const result = onChange(modelFields);
            value = result?.receiver ?? value;
          }
          if (errors.receiver?.hasError) {
            runValidationTasks("receiver", value);
          }
          setReceiver(value);
        }}
        onBlur={() => runValidationTasks("receiver", receiver)}
        errorMessage={errors.receiver?.errorMessage}
        hasError={errors.receiver?.hasError}
        {...getOverrideProps(overrides, "receiver")}
      ></TextField>
      <TextField
        label="Studygroupid"
        isRequired={false}
        isReadOnly={false}
        value={studygroupid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sender,
              receiver,
              studygroupid: value,
            };
            const result = onChange(modelFields);
            value = result?.studygroupid ?? value;
          }
          if (errors.studygroupid?.hasError) {
            runValidationTasks("studygroupid", value);
          }
          setStudygroupid(value);
        }}
        onBlur={() => runValidationTasks("studygroupid", studygroupid)}
        errorMessage={errors.studygroupid?.errorMessage}
        hasError={errors.studygroupid?.hasError}
        {...getOverrideProps(overrides, "studygroupid")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || inviteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || inviteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
