import { DataType } from "../../pages/ChartGenerator/ChartGenerator.interface";

export const getSectionNameByDataType = (type?: DataType): string =>
  ({
    [DataType.ALBUM]: "Most listened album",
    [DataType.ARTIST]: "Most listened artist",
    [DataType.TRACK]: "Most listened track",
    [DataType.UNDEFINED]: "Most listened",
  }[type || DataType.UNDEFINED]);
