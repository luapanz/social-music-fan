import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./VideoPublic.container'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const VideoPublic = props => <LoadableComponent {...props} />;

VideoPublic.displayName = 'VideoPublic';
