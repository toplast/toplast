const getSectionName = name => `Most listened ${name}`;

const buildSection = (data = {}, section) => {
  return {
    sectionName: getSectionName(section),
    title: data.name,
    subtitle: data.artist,
    image: data.image,
    round: !data.artist
  };
};

const buildBody = (items = []) => {
  return items.map(item => ({
    title: item.name,
    subtitle: item.artist,
    image: item.image,
    round: !item.artist
  }));
};

const handleChart = (option, data) => {
  const sections = ['album', 'artist', 'track'];
  const parsedOption = parseInt(option, 0);

  const header = buildSection(
    data[parsedOption - 1].shift(),
    sections[parsedOption - 1]
  );
  const body = buildBody(data[parsedOption - 1]);
  const footer = [
    buildSection(
      (data[parsedOption] || data[parsedOption - 3])[0],
      sections[parsedOption] || sections[parsedOption - 3]
    ),
    buildSection(
      (data[parsedOption - 2] || data[parsedOption + 1])[0],
      sections[parsedOption - 2] || sections[parsedOption + 1]
    )
  ];

  return { header, body, footer };
};

module.exports = handleChart;
