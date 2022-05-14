import { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { Typography } from '../../../common/Typography';
import { SpaceBlock } from '../../../common/SpaceBlock';
import useTranslation from 'next-translate/useTranslation';
import cn from 'classnames';
import { FormikProvider, useFormik, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Form } from '../../../common/Form';
import { FieldLabel } from '../../../common/FieldLabel';
import { RiArrowDownSLine } from 'react-icons/ri';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Scrollbar from 'react-scrollbars-custom';
import useOnclickOutside from 'react-cool-onclickoutside';
import TextareaAutosize from 'react-textarea-autosize';
import * as notificationsService from '../../../../configs/notifications.service';

export const FormSection: FC = () => {
  const [hideHeader, setHideHeader] = useState(true);
  const { t } = useTranslation('common');
  const [menuIspen, setMenuIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const links = [
    t('like.startMyVenture'),
    t('like.businessMentoring'),
    t('like.developMyBusiness'),
    t('like.increaseProductivity'),
    t('like.leadershipCoaching'),
    t('like.findInspiration'),
    t('like.businessCoaching'),
    t('like.manageTimeEfficiently'),
    t('like.delegateOthers'),
    t('like.setClearerGoals'),
    t('like.solveConflictsTeam'),
    t('like.talkUnderstand'),
    t('like.liveMeaningful'),
    t('like.dealAnxiety'),
    t('like.workRelationship'),
    t('like.findBalance'),
    t('like.dealBurnout'),
    t('like.becomeHappier'),
  ];
  const handleScroll = () => {
    const element: any = document.querySelector('#form');
    if (element) {
      const rect: any = element.getBoundingClientRect();
      if (rect.top) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  };

  const formik = useFormik<any>({
    validationSchema: Yup.object().shape({
      subject: Yup.string().required(t('form.required')),
      full_name: Yup.string().required(t('form.required')),
      email: Yup.string()
        .email(t('form.validEmail'))
        .required(t('form.required')),
      message: Yup.string().required(t('form.required')),
    }),
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      subject: '',
      full_name: '',
      email: '',
      message: '',
    },
    onSubmit: () => {
      notificationsService.successMsg(t('form.successMessage'));
      notificationsService.errorMsg(t('form.errorMessage'));
    },
  });

  const { setFieldValue, handleSubmit, values } = formik;

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIspen);
  };
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  useOnclickOutside(handleCloseMenu, { refs: [ref] });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="form" className={styles.form}>
      <ContentLimiter>
        <div className={styles.form_wrapper}>
          <Header black show={hideHeader} />
          <div className={styles.form_content}>
            <div className={styles.form_social}>
              <a className={styles.form_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.form_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.form_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.form_middle}>
              <div className={styles.form_formWrapper}>
                <div className={styles.form_formWrapper_left}>
                  <SpaceBlock marginBottom="s3">
                    <Typography uppercase fontWeight="bold" variant="h3">
                      {t('form.title')}
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography color="greyText" variant="body-16">
                      {t('form.text1')}
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography color="greyText" variant="body-16">
                      {t('form.text2')}
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock>
                    <a
                      className={cn(styles.form_formWrapper_link, 'link')}
                      href="mailto:welcome@primush.com"
                    >
                      welcome@primush.com
                    </a>
                  </SpaceBlock>
                </div>
                <div className={styles.form_formWrapper_right}>
                  <FormikProvider value={formik}>
                    <Form width="full" onSubmit={handleSubmit}>
                      <SpaceBlock marginBottom="s4">
                        <Field name={'subject'}>
                          {({
                            field,
                            meta: { error, touched },
                          }: FieldProps) => {
                            return (
                              <FieldLabel
                                label={t('form.subject')}
                                isError={touched && !!error}
                                errorMessage={error}
                              >
                                <div ref={ref} className={styles.form_select}>
                                  <div
                                    onClick={handleToggleMenu}
                                    className={cn(styles.form_select_value, {
                                      [styles.form_select_value_error]:
                                        touched && !!error,
                                    })}
                                  >
                                    {field.value ? (
                                      <Typography variant="body-16">
                                        {field.value}
                                      </Typography>
                                    ) : (
                                      <Typography
                                        color="greyTextLight"
                                        variant="body-16"
                                      >
                                        {t('form.subjectPlaceholder')}
                                      </Typography>
                                    )}
                                    <Typography variant="body-20">
                                      <RiArrowDownSLine />
                                    </Typography>
                                  </div>
                                  {menuIspen && (
                                    <div className={styles.form_select_menu}>
                                      <Scrollbar
                                        style={{
                                          width: '100%',
                                          height: '100%',
                                        }}
                                      >
                                        {links.map((link: any) => (
                                          <div
                                            onClick={() => {
                                              handleCloseMenu();
                                              setFieldValue('subject', link);
                                            }}
                                            className={cn(
                                              styles.form_select_option,
                                              {
                                                [styles.form_select_option_active]:
                                                  values.subject === link,
                                              }
                                            )}
                                            key={link}
                                          >
                                            {link}
                                          </div>
                                        ))}
                                      </Scrollbar>
                                    </div>
                                  )}
                                </div>
                              </FieldLabel>
                            );
                          }}
                        </Field>
                      </SpaceBlock>
                      <SpaceBlock marginBottom="s4">
                        <Field name={'full_name'}>
                          {({
                            field,
                            meta: { error, touched },
                          }: FieldProps) => {
                            return (
                              <FieldLabel
                                label={t('form.fullName')}
                                isError={touched && !!error}
                                errorMessage={error}
                              >
                                <div
                                  className={cn(styles.form_input, {
                                    [styles.form_input_error]:
                                      touched && !!error,
                                  })}
                                >
                                  <input
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    placeholder={t('form.fullNamePlaceholder')}
                                    onChange={field.onChange}
                                    type="text"
                                    value={field.value}
                                  />
                                </div>
                              </FieldLabel>
                            );
                          }}
                        </Field>
                      </SpaceBlock>
                      <SpaceBlock marginBottom="s4">
                        <Field name={'email'}>
                          {({
                            field,
                            meta: { error, touched },
                          }: FieldProps) => {
                            return (
                              <FieldLabel
                                label={t('form.email')}
                                isError={touched && !!error}
                                errorMessage={error}
                              >
                                <div
                                  className={cn(styles.form_input, {
                                    [styles.form_input_error]:
                                      touched && !!error,
                                  })}
                                >
                                  <input
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    placeholder={t('form.emailPlaceholder')}
                                    onChange={field.onChange}
                                    type="text"
                                    value={field.value}
                                  />
                                </div>
                              </FieldLabel>
                            );
                          }}
                        </Field>
                      </SpaceBlock>
                      <SpaceBlock marginBottom="s6">
                        <Field name={'message'}>
                          {({
                            field,
                            meta: { error, touched },
                          }: FieldProps) => {
                            return (
                              <FieldLabel
                                label={t('form.message')}
                                isError={touched && !!error}
                                errorMessage={error}
                              >
                                <div
                                  className={cn(styles.form_input, {
                                    [styles.form_input_error]:
                                      touched && !!error,
                                  })}
                                >
                                  <TextareaAutosize
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    placeholder={t('form.messagePlaceholder')}
                                    onChange={field.onChange}
                                    value={field.value}
                                  />
                                </div>
                              </FieldLabel>
                            );
                          }}
                        </Field>
                      </SpaceBlock>
                      <SpaceBlock>
                        <button
                          type="submit"
                          className={cn(styles.form_button, 'link')}
                        >
                          {t('form.button')}
                          <HiArrowNarrowRight />
                        </button>
                      </SpaceBlock>
                    </Form>
                  </FormikProvider>
                </div>
              </div>
            </div>
            <div className={styles.form_rightBlock}>
              <span />
              <Navigation black leftButtonId="#reviews" id="#form" />
              <Typography
                className={styles.form_vertical}
                uppercase
                variant="body-20"
              >
                form Yurii Primush
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
