import clsx from 'clsx';
import React from 'react';
import {Space} from '../../molecules/Space';

export const Component: React.VFC<{
  className?: string;
  i18n: Record<'title', string>;
  spaces: {
    id: string;
    title: string;
    openDate: string;
    followingUsers: {
      hasMore: boolean;
      users: {uniqueName: string; displayName: string; picture: string}[];
    };
  }[];
}> = ({className, i18n, spaces}) => (
  <section
    className={clsx(
      className,
      'bg-gray-50',
      'px-2',
      'py-4',
      'rounded-sm',
      'shadow-sm',
    )}
  >
    <h2 className={clsx('px-2', 'font-bold')}>{i18n.title}</h2>
    <div className={clsx('mt-2', 'flex', 'flex-col', 'w-full', 'space-y-4')}>
      {spaces.map(({title, id, openDate, followingUsers}) => (
        <Space
          className={clsx('w-full')}
          key={id}
          {...{id, title, openDate, followingUsers}}
        />
      ))}
    </div>
  </section>
);
