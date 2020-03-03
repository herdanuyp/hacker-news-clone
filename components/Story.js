import Link from 'next/link';

export default function Story({ news }) {
  return (
    <ul>
      {news &&
        news.map(data => (
          <li key={data.id}>
            <p>{data.title}</p>
            <small>
              {data.points} by {data.user}
            </small>{' '}
            | <small>{data.time_ago}</small> |{' '}
            <small>
              <a href={data.url} target='_blank' rel='noopener noreferrer'>
                News Link
              </a>
            </small>{' '}
            |{' '}
            <small>
              {data.comments_count > 0 ? (
                <Link href='/comments/[id]' as={`/comments/${data.id}`}>
                  <a>{data.comments_count} comments</a>
                </Link>
              ) : (
                'no comment'
              )}
            </small>
          </li>
        ))}
    </ul>
  );
}
