import Tag from "../Tag";
import { getRandomInt} from "../../utils/getRandom";
import "./TagsList.scss";

export interface TagsListProps {
  items: string[];
}

const TagColors = [
  "#c13359",
  "#43ACC7",
  "#34AD6C",
  "#F9B339",
  "#AC4DCF"
]

const TagsList = (props: TagsListProps) => {
  const {items, ...rest} = props;

  return (
    <div className="tags-list" {...rest}>
      {items.map((item, idx) => {
        return  (
          <Tag
            key={`taglist-item-${idx}-item`}
            style={{
              backgroundColor: TagColors[getRandomInt(TagColors.length)]
            }}
          >{item}</Tag>
        )
      })}
    </div>
  )
}

export default TagsList
