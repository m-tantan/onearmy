import { Form } from 'react-final-form'
import { useNavigate } from 'react-router-dom'
import { Button, ElWithBeforeIcon } from 'oa-components'
import { IModerationStatus } from 'oa-shared'
import IconHeaderHowto from 'src/assets/images/header-section/howto-header-icon.svg'
import { logger } from 'src/logger'
import { PostingGuidelines } from 'src/pages/Question/Content/Common'
import * as LABELS from 'src/pages/Question/labels'
import { useQuestionStore } from 'src/stores/Question/question.store'
import { setAllowDraftSaveFalse } from 'src/utils/validators'
import { Box, Card, Flex, Heading } from 'theme-ui'

import { QUESTION_MAX_IMAGES } from '../../constants'
import { QuestionImagesField } from './FormFields/QuestionImage.field'
import {
  QuestionCategoryField,
  QuestionDescriptionField,
  QuestionTagsField,
  QuestionTitleField,
} from './FormFields'

import type { IQuestion } from 'src/models'

interface IProps {
  'data-testid'?: string
  formValues?: any
  parentType: 'create' | 'edit'
}

export const QuestionForm = (props: IProps) => {
  const { parentType } = props
  const navigate = useNavigate()
  const store = useQuestionStore()
  const publishButtonText =
    props.formValues?.moderation === IModerationStatus.DRAFT
      ? LABELS.buttons.create
      : LABELS.buttons[parentType]

  const headingText = LABELS.headings[parentType]

  return (
    <Form
      data-testid={props['data-testid']}
      onSubmit={async (formValues: Partial<IQuestion.FormInput>) => {
        formValues.moderation = formValues.allowDraftSave
          ? IModerationStatus.DRAFT
          : IModerationStatus.ACCEPTED
        try {
          const newDocument = await store.upsertQuestion(
            formValues as IQuestion.FormInput,
          )
          if (newDocument) {
            navigate('/questions/' + newDocument.slug)
          }
        } catch (e) {
          logger.error(e)
        }
      }}
      mutators={{ setAllowDraftSaveFalse }}
      initialValues={props.formValues}
      render={({ submitting, handleSubmit, form, values }) => {
        const numberOfImageInputsAvailable = values?.images
          ? Math.min(values.images.length + 1, QUESTION_MAX_IMAGES)
          : 1
        return (
          <Flex mx={-2} bg={'inherit'} sx={{ flexWrap: 'wrap' }}>
            <Flex
              bg="inherit"
              px={2}
              sx={{ width: ['100%', '100%', `${(2 / 3) * 100}%`] }}
              mt={4}
            >
              <Box
                as="form"
                id="questionForm"
                sx={{ width: '100%' }}
                onSubmit={handleSubmit}
              >
                <Card sx={{ backgroundColor: 'softblue' }}>
                  <Flex
                    data-cy={`question-${parentType}-title`}
                    sx={{ alignItems: 'center', paddingX: 3, paddingY: 2 }}
                  >
                    <Heading>{headingText}</Heading>
                    <Box ml="15px">
                      <ElWithBeforeIcon icon={IconHeaderHowto} size={20} />
                    </Box>
                  </Flex>
                </Card>
                <Box sx={{ mt: '20px', display: ['block', 'block', 'none'] }}>
                  <PostingGuidelines />
                </Box>
                <Card sx={{ marginTop: 4, padding: 4, overflow: 'visible' }}>
                  <QuestionTitleField />
                  <QuestionDescriptionField />
                  <QuestionImagesField
                    inputsAvailable={numberOfImageInputsAvailable}
                  />
                  <QuestionCategoryField />
                  <QuestionTagsField />
                </Card>
              </Box>
            </Flex>
            <Flex
              sx={{
                flexDirection: 'column',
                width: ['100%', '100%', `${100 / 3}%`],
                height: '100%',
              }}
              bg="inherit"
              px={2}
              mt={[0, 0, 4]}
            >
              <Box
                sx={{
                  top: 3,
                  maxWidth: ['inherit', 'inherit', '400px'],
                }}
              >
                <Box sx={{ display: ['none', 'none', 'block'] }}>
                  <PostingGuidelines />
                </Box>
                <Button
                  large
                  data-cy={'submit'}
                  mt={3}
                  variant="primary"
                  type="submit"
                  disabled={submitting}
                  onClick={(event) => {
                    form.mutators.setAllowDraftSaveFalse()
                    handleSubmit(event)
                  }}
                  sx={{
                    width: '100%',
                    mb: ['40px', '40px', 0],
                    display: 'block',
                  }}
                >
                  {publishButtonText}
                </Button>
              </Box>
            </Flex>
          </Flex>
        )
      }}
    />
  )
}
