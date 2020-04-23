import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { chartOptions, IChartFormProps, periods } from "./ChartForm.interface";
import { ButtonComponent } from "../Button/Button.component";
import React from "react";
import { useChartFormStyles } from "./chartForm.style";

export const ChartFormComponent = ({
  formData,
  changeFormData,
  generateChart,
  loading,
}: IChartFormProps): JSX.Element => {
  const classes = useChartFormStyles();

  return (
    <Grid container>
      <Grid item sm={3} md={4} />
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <TextField
            id="username"
            label="Last.fm username"
            fullWidth={true}
            className={classes.input}
            onChange={(event): void => {
              changeFormData({ user: event.target.value });
            }}
          />

          <FormControl fullWidth={true} className={classes.select}>
            <InputLabel>Chart option</InputLabel>
            <Select
              native
              id="chartOption"
              value={formData.chart}
              onChange={(event): void => {
                changeFormData({ chart: event.target.value });
              }}
            >
              {chartOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth={true} className={classes.select}>
            <InputLabel>Period</InputLabel>
            <Select
              native
              id="period"
              value={formData.period}
              onChange={(event): void => {
                changeFormData({ period: event.target.value });
              }}
            >
              {periods.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>

          <ButtonComponent
            fullWidth={true}
            onClick={generateChart}
            loading={loading}
          >
            Generate chart
          </ButtonComponent>
        </Card>
      </Grid>
    </Grid>
  );
};
