import React, { Component } from 'react';

export default function Authentic(props) {
  return <h1>{props.match.params.code}</h1>
}