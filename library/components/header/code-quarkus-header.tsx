import React from 'react';
import './code-quarkus-header.scss';
import { createLinkTracker, useAnalytics } from '@quarkusio/code-quarkus.core.analytics';
import logo from '../media/quarkus-logo.svg';
import { StreamPicker, StreamPickerProps } from './stream-picker';

export interface CodeQuarkusHeaderProps {
  streamProps: StreamPickerProps;
}

export interface CompanyHeaderProps extends CodeQuarkusHeaderProps{
  children: JSX.Element;
}

export function CompanyHeader(props: CompanyHeaderProps) {
  const analytics = useAnalytics();
  const linkTracker = createLinkTracker(analytics,'UX', 'Header');
  return (
    <div className="header">
      <div className="header-content responsive-container">
        <div className="quarkus-brand">
          <a href="/" onClick={linkTracker}>
            <img src={logo} className="project-logo" title="Quarkus" alt="Quarkus"/>
          </a>
          <StreamPicker {...props.streamProps} />
        </div>
        <div className="nav-container">
          {props.children}
        </div>
      </div>
    </div>
  );
}