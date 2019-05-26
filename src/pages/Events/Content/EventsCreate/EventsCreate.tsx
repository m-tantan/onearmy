import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { IHowtoFormInput } from 'src/models/howto.models'
import TEMPLATE from './Template'
import { UploadedFile } from 'src/pages/common/UploadedFile/UploadedFile'
import { InputField, TextAreaField } from 'src/components/Form/Fields'
import { Button } from 'src/components/Button'
import { FieldState } from 'final-form'
import { EventStore } from 'src/stores/Events/events.store'
import Heading from 'src/components/Heading'
import { FlexContainer } from 'src/components/Layout/FlexContainer'
import { BoxContainer } from 'src/components/Layout/BoxContainer'
import { TagsSelectField } from 'src/components/Form/TagsSelect.field'
import { inject } from 'mobx-react'
import { PostingGuidelines } from './PostingGuidelines'
import { IEvent, IEventFormInput } from 'src/models/events.models'
import { LocationSearchField } from 'src/components/Form/LocationSearch.field'

interface IState {
  formValues: IEvent
  formSaved: boolean
  _docID: string
  _uploadPath: string
  showSubmitModal?: boolean
}
interface IProps extends RouteComponentProps<any> {}
interface IInjectedProps extends IProps {
  eventStore: EventStore
}

// validation - return undefined if no error (i.e. valid)
const required = (value: any) => (value ? undefined : 'Required')

@inject('eventStore')
export class EventsCreate extends React.Component<IProps, IState> {
  uploadRefs: { [key: string]: UploadedFile | null } = {}
  constructor(props: any) {
    super(props)
    // generate unique id for db and storage references and assign to state
    const docID = this.store.generateID()
    this.state = {
      formValues: { ...TEMPLATE.INITIAL_VALUES, id: docID } as IEvent,
      formSaved: false,
      _docID: docID,
      _uploadPath: `uploads/events/${docID}`,
    }
  }

  get injected() {
    return this.props as IInjectedProps
  }
  get store() {
    return this.injected.eventStore
  }

  public onSubmit = async (formValues: IEventFormInput) => {
    console.log('form values', formValues)
    await this.store.uploadEvent(formValues, this.state._docID)
  }

  public validateTitle = async (value: any, meta?: FieldState) => {
    this.store.validateTitle(value, 'eventsV1', meta)
  }

  public validateUrl = async (value: any, meta?: FieldState) => {
    this.store.validateUrl(value, meta)
  }

  public render() {
    const { formValues } = this.state
    return (
      <Form
        onSubmit={v => this.onSubmit(v as IEventFormInput)}
        initialValues={formValues}
        mutators={{
          ...arrayMutators,
        }}
        validateOnBlur
        render={({ submitting, values, invalid, errors, handleSubmit }) => {
          const disabled = invalid || submitting
          return (
            <FlexContainer m={'0'} p={'0'} bg={'inherit'} flexWrap="wrap">
              <BoxContainer bg="inherit" p={'0'} width={[1, 1, 2 / 3]}>
                {/* using prevent default as sometimes submit triggered unintentionally */}
                <form onSubmit={e => e.preventDefault()}>
                  {/* How To Info */}
                  <BoxContainer p={3}>
                    <Heading small bold>
                      List your event
                    </Heading>

                    <Field
                      name="title"
                      validate={value => this.validateTitle(value)}
                      component={InputField}
                      placeholder="Title of your event"
                    />
                    <Field name="tags" component={TagsSelectField} />
                    <Field
                      name="location"
                      validateFields={[]}
                      validate={(value: any) =>
                        value.hasOwnProperty('latlng') ? undefined : 'Required'
                      }
                      component={LocationSearchField}
                    />
                    <Field
                      name="date"
                      validateFields={[]}
                      validate={required}
                      component={InputField}
                      type="date"
                    />
                    <Field
                      name="url"
                      validateFields={[]}
                      validate={value => this.validateUrl(value)}
                      component={InputField}
                      placeholder="URL to offsite link (Facebook, Meetup, etc)"
                    />
                  </BoxContainer>
                </form>
              </BoxContainer>
              {/* post guidelines container */}
              <BoxContainer
                width={[1, 1, 1 / 3]}
                height={'100%'}
                bg="inherit"
                p={0}
                pl={2}
              >
                <PostingGuidelines />
                <Button
                  onClick={() => handleSubmit()}
                  width={1}
                  mt={3}
                  variant={disabled ? 'disabled' : 'secondary'}
                  disabled={submitting || invalid}
                >
                  Publish
                </Button>
                <Button onClick={() => console.log(errors)} width={1} mt={3}>
                  check
                </Button>
              </BoxContainer>
            </FlexContainer>
          )
        }}
      />
    )
  }
}