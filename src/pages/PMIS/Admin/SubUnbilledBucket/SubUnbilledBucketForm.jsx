import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useDispatch } from "react-redux";

import Modal from "../../../../components/Modal";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";

import HrActions from "../../../../store/actions/hr-actions";

const CurrentUnbilledBucketForm = ({
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
}) => {
  const [modalOpen, setmodalOpen] = useState(false);

  const dispatch = useDispatch();

  const Form = [
    // {
    //   label: "SSID",
    //   value: "",
    //   name: "ssid",
    //   type: "text",
    //   required: true,
    //   props: {
    //     onChange: (e) => {},
    //   },
    //   classes: "col-span-1",
    // },
    {
      label: "Sub Unbilled Bucket",
      value: "",
      name: "name",
      type: "text",
      required: true,
      props: {
        onChange: (e) => {},
      },
      classes: "col-span-1",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onTableViewSubmit = (data) => {
  if (formValue?.uniqueId) {
    dispatch(
      HrActions.postSubUnbilledBucket(
        true,
        data,
        () => {
          setIsOpen(false);
          dispatch(HrActions.getSubUnbilledBucket());
        },
        formValue.uniqueId
      )
    );
  } else {
    dispatch(
      HrActions.postSubUnbilledBucket(
        true,
        data,
        () => {
          setIsOpen(false);
          dispatch(HrActions.getSubUnbilledBucket());
        }
      )
    );
  }
};

  useEffect(() => {
    if (resetting) {
      reset({});

      Form.forEach((field) => {
        setValue(field.name, field.value);
      });
    } else {
      reset({});

      Object.keys(formValue).forEach((key) => {
        if (["startAt", "endAt"].includes(key)) {
          const momentObj = moment(formValue[key]);
          setValue(key, momentObj.toDate());
        } else {
          setValue(key, formValue[key]);
        }
      });
    }
  }, [formValue, resetting]);

  return (
    <>
      <Modal
        size={"xl"}
        children={
          <>
            <CommonForm
              classes={"grid-cols-1 gap-1"}
              Form={Form}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
            />
          </>
        }
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
        <CommonForm
          classes={"grid-cols-1 gap-1"}
          Form={Form}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />

        <Button
          classes={"mt-2 w-sm text-center flex mx-auto"}
          onClick={handleSubmit(onTableViewSubmit)}
          name="Submit"
        />
      </div>
    </>
  );
};

export default CurrentUnbilledBucketForm;