import { Dispatch, SetStateAction } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormikProps } from 'formik';
import { RegisterSchema } from 'types/typings';
import { Typography, useTheme } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { FlexBetween } from 'components/styles';
import { DropContainer } from './styles';
import { ThemeOptions } from 'types/typings';

interface Props {
  formik: FormikProps<RegisterSchema>;
  setError: Dispatch<SetStateAction<boolean>>;
}

const Dropzone = ({ formik, setError }: Props) => {
  const { palette } = useTheme<ThemeOptions>();
  const { values, setFieldValue } = formik;

  const onDropAccepted = (acceptedFiles: File[]) => {
    setFieldValue('picture', acceptedFiles[0]);
  };

  const onDropRejected = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 5000);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    multiple: false,
    maxSize: 1048576,
    onDropAccepted,
    onDropRejected
  });

  return (
    <DropContainer {...getRootProps()} palette={palette}>
      <input {...getInputProps()} />

      {!values.picture ? (
        <Typography>Add picture here...</Typography>
      ) : (
        <FlexBetween>
          <Typography>{values.picture.name}</Typography>

          <EditOutlinedIcon />
        </FlexBetween>
      )}
    </DropContainer>
  );
};

export default Dropzone;
