const availableLastFmPeriods = [
  '7day',
  '1month',
  '3month',
  '6month',
  '12month',
  'overall'
];

const validateLastFmParams = ({ user, period, limit }) => {
  return (
    Boolean(user) &&
    limit <= 5 &&
    limit > 0 &&
    availableLastFmPeriods.indexOf(period) >= 0
  );
};

module.exports = { validateLastFmParams };
