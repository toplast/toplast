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

const validateTopLastParams = ({ album, artist, track, option, user, period }) => {
  return (
    Boolean(album) &&
    Boolean(artist) &&
    Boolean(track) &&
    Boolean(option) &&
    Boolean(user) &&
    Boolean(period)
  );
};

module.exports = { validateLastFmParams, validateTopLastParams };
