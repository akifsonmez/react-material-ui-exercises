import React from "react";
import Typography from '@material-ui/core/Typography'
import { createTheme, ThemeProvider } from "@material-ui/core";

const customTheme = createTheme({
  typography:{
    fontFamily:'M+PLUS+1+Code'
  },
  palette:{
    text:{
      primary:"red",
      secondary:"blue"
    }
  }
});

const TypographyExamples = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Typography
        variant="h2"
        color="primary"
        align="center"
        gutterBottom>
        Primary H2 Example
      </Typography>
      <Typography
        variant="subtitle1"
        color="textPrimary"
        align="center"
        gutterBottom>
        Subtitle1 with textPrimary
      </Typography>
      <Typography
        variant="body1"
        color="textPrimary"
        gutterBottom
        paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        align="center"
        gutterBottom>
        Subtitle2 with textSecondary
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
    </ThemeProvider>
  );
}

export default TypographyExamples