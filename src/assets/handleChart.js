const getSectionName = (name) => `Most listened ${name}`

const buildSection = (data = {}, section) => {
  return {
    sectionName: getSectionName(section),
    title: data.name,
    subtitle: data.artist,
    image: data.image,
    round: !data.artist
  }
}

const buildBody = (items = []) => {
  const _items = []
  for (const item of items) {
    const _item = {
      title: item.name,
      subtitle: item.artist,
      image: item.image,
      round: !item.artist
    }

    _items.push(_item)
  }

  return _items
}

export const handleChart = (option, data) => {
  const sections = ['album', 'artist', 'track']
  option = parseInt(option)

  const header = buildSection(
    data[option - 1].shift(),
    sections[option - 1]
  )
  const body = buildBody(data[option - 1])
  const footer = [
    buildSection(
      (data[option] || data[option - 3])[0],
      sections[option] || sections[option - 3]
    ),
    buildSection(
      (data[option - 2] || data[option + 1])[0],
      sections[option - 2] || sections[option + 1]
    )
  ]

  return { header, body, footer }
}
