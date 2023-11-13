/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getStudyGroupCard } from "../graphql/queries";
import { updateStudyGroupCard } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function StudyGroupCardUpdateForm(props) {
  const {
    id: idProp,
    studyGroupCard: studyGroupCardModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    groupName: "",
    numMembers: "",
    className: "",
    acceptingMembers: false,
    description: "",
    groupOwner: "",
    image: "",
    memberList: [],
  };
  const [groupName, setGroupName] = React.useState(initialValues.groupName);
  const [numMembers, setNumMembers] = React.useState(initialValues.numMembers);
  const [className, setClassName] = React.useState(initialValues.className);
  const [acceptingMembers, setAcceptingMembers] = React.useState(
    initialValues.acceptingMembers
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [groupOwner, setGroupOwner] = React.useState(initialValues.groupOwner);
  const [image, setImage] = React.useState(initialValues.image);
  const [memberList, setMemberList] = React.useState(initialValues.memberList);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studyGroupCardRecord
      ? { ...initialValues, ...studyGroupCardRecord }
      : initialValues;
    setGroupName(cleanValues.groupName);
    setNumMembers(cleanValues.numMembers);
    setClassName(cleanValues.className);
    setAcceptingMembers(cleanValues.acceptingMembers);
    setDescription(cleanValues.description);
    setGroupOwner(cleanValues.groupOwner);
    setImage(cleanValues.image);
    setMemberList(cleanValues.memberList ?? []);
    setCurrentMemberListValue("");
    setErrors({});
  };
  const [studyGroupCardRecord, setStudyGroupCardRecord] = React.useState(
    studyGroupCardModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getStudyGroupCard.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStudyGroupCard
        : studyGroupCardModelProp;
      setStudyGroupCardRecord(record);
    };
    queryData();
  }, [idProp, studyGroupCardModelProp]);
  React.useEffect(resetStateValues, [studyGroupCardRecord]);
  const [currentMemberListValue, setCurrentMemberListValue] =
    React.useState("");
  const memberListRef = React.createRef();
  const validations = {
    groupName: [{ type: "Required" }],
    numMembers: [{ type: "Required" }],
    className: [{ type: "Required" }],
    acceptingMembers: [{ type: "Required" }],
    description: [{ type: "Required" }],
    groupOwner: [{ type: "Required" }, { type: "Email" }],
    image: [{ type: "URL" }],
    memberList: [{ type: "Required" }],
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
      columnGap={tokens.space.small.value}
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          groupName,
          numMembers,
          className,
          acceptingMembers,
          description,
          groupOwner,
          image: image ?? null,
          memberList,
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
            query: updateStudyGroupCard.replaceAll("__typename", ""),
            variables: {
              input: {
                id: studyGroupCardRecord.id,
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
      {...getOverrideProps(overrides, "StudyGroupCardUpdateForm")}
      {...rest}
    >
      <TextField
        label="Group name"
        isRequired={true}
        isReadOnly={false}
        value={groupName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName: value,
              numMembers,
              className,
              acceptingMembers,
              description,
              groupOwner,
              image,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.groupName ?? value;
          }
          if (errors.groupName?.hasError) {
            runValidationTasks("groupName", value);
          }
          setGroupName(value);
        }}
        onBlur={() => runValidationTasks("groupName", groupName)}
        errorMessage={errors.groupName?.errorMessage}
        hasError={errors.groupName?.hasError}
        {...getOverrideProps(overrides, "groupName")}
      ></TextField>
      <TextField
        label="Num members"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={numMembers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers: value,
              className,
              acceptingMembers,
              description,
              groupOwner,
              image,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.numMembers ?? value;
          }
          if (errors.numMembers?.hasError) {
            runValidationTasks("numMembers", value);
          }
          setNumMembers(value);
        }}
        onBlur={() => runValidationTasks("numMembers", numMembers)}
        errorMessage={errors.numMembers?.errorMessage}
        hasError={errors.numMembers?.hasError}
        {...getOverrideProps(overrides, "numMembers")}
      ></TextField>
      <TextField
        label="Class name"
        isRequired={true}
        isReadOnly={false}
        value={className}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers,
              className: value,
              acceptingMembers,
              description,
              groupOwner,
              image,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.className ?? value;
          }
          if (errors.className?.hasError) {
            runValidationTasks("className", value);
          }
          setClassName(value);
        }}
        onBlur={() => runValidationTasks("className", className)}
        errorMessage={errors.className?.errorMessage}
        hasError={errors.className?.hasError}
        {...getOverrideProps(overrides, "className")}
      ></TextField>
      <SwitchField
        label="Accepting members"
        defaultChecked={false}
        isDisabled={false}
        isChecked={acceptingMembers}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers,
              className,
              acceptingMembers: value,
              description,
              groupOwner,
              image,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.acceptingMembers ?? value;
          }
          if (errors.acceptingMembers?.hasError) {
            runValidationTasks("acceptingMembers", value);
          }
          setAcceptingMembers(value);
        }}
        onBlur={() => runValidationTasks("acceptingMembers", acceptingMembers)}
        errorMessage={errors.acceptingMembers?.errorMessage}
        hasError={errors.acceptingMembers?.hasError}
        {...getOverrideProps(overrides, "acceptingMembers")}
      ></SwitchField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers,
              className,
              acceptingMembers,
              description: value,
              groupOwner,
              image,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Group owner"
        isRequired={true}
        isReadOnly={false}
        value={groupOwner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers,
              className,
              acceptingMembers,
              description,
              groupOwner: value,
              image,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.groupOwner ?? value;
          }
          if (errors.groupOwner?.hasError) {
            runValidationTasks("groupOwner", value);
          }
          setGroupOwner(value);
        }}
        onBlur={() => runValidationTasks("groupOwner", groupOwner)}
        errorMessage={errors.groupOwner?.errorMessage}
        hasError={errors.groupOwner?.hasError}
        {...getOverrideProps(overrides, "groupOwner")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers,
              className,
              acceptingMembers,
              description,
              groupOwner,
              image: value,
              memberList,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              groupName,
              numMembers,
              className,
              acceptingMembers,
              description,
              groupOwner,
              image,
              memberList: values,
            };
            const result = onChange(modelFields);
            values = result?.memberList ?? values;
          }
          setMemberList(values);
          setCurrentMemberListValue("");
        }}
        currentFieldValue={currentMemberListValue}
        label={"Member list"}
        items={memberList}
        hasError={errors?.memberList?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("memberList", currentMemberListValue)
        }
        errorMessage={errors?.memberList?.errorMessage}
        setFieldValue={setCurrentMemberListValue}
        inputFieldRef={memberListRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Member list"
          isRequired={true}
          isReadOnly={false}
          value={currentMemberListValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.memberList?.hasError) {
              runValidationTasks("memberList", value);
            }
            setCurrentMemberListValue(value);
          }}
          onBlur={() =>
            runValidationTasks("memberList", currentMemberListValue)
          }
          errorMessage={errors.memberList?.errorMessage}
          hasError={errors.memberList?.hasError}
          ref={memberListRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "memberList")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || studyGroupCardModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || studyGroupCardModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
