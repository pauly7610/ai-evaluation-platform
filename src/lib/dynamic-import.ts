import dynamic from 'next/dynamic';
import React, { ComponentType, ReactElement } from 'react';

type DynamicOptions<T> = {
  loading?: () => ReactElement | null;
  ssr?: boolean;
  // Add other Next.js dynamic import options as needed
};

export function dynamicImport<T extends ComponentType<any>>(
  loader: () => Promise<{ default: T }>,
  options?: DynamicOptions<T>
) {
  return dynamic(loader, {
    loading: options?.loading,
    ssr: options?.ssr !== false,
  });
}
