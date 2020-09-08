import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cuid from "cuid";
import { Segment, Header, Button } from "semantic-ui-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { updateEvent, createEvent } from "../eventActions";
import { categoryData } from "../../../app/api/categoryOptions";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("タイトルを入力してください"),
    category: Yup.string().required("カテゴリを入力してください"),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />
          <MyTextInput name='title' placeholder='Event title' />
          <MySelectInput
            name='category'
            placeholder='Event category'
            options={categoryData}
          />
          <MyTextArea name='description' placeholder='Description' rows={3} />
          <Header sub color='teal' content='Event Location Details' />
          <MyTextInput name='city' placeholder='City' />
          <MyTextInput name='venue' placeholder='Venue' />
          <MyDateInput
            name='date'
            placeholderText='Event date'
            timeFormat='HH:mm'
            showTimeSelect
            timeCaption='time'
            dateFormat='MMMM d, yyyy h:mm a'
          />
          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            as={Link}
            to='/events'
            type='submit'
            floated='right'
            content='Cancel'
          />
        </Form>
      </Formik>
    </Segment>
  );
}
