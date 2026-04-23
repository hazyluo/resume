interface TagListProps {
  items: string[]
}

export function TagList({ items }: TagListProps) {
  if (!items.length) {
    return <p className="empty-hint">暂无标签</p>
  }

  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
