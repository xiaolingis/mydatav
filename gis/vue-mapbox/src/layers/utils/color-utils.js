// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import * as d3Color from 'd3-color';
/**
 * get r g b from hex code
 *
 * @param {string} hex
 * @returns {array} array of r g bs
 */
export function hexToRgb(hex) {
  // const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  // const r = parseInt(result[1], 16);
  // const g = parseInt(result[2], 16);
  // const b = parseInt(result[3], 16);

  // return [r, g, b];
  const dColor = d3Color.color(hex);
  return [dColor.r, dColor.g, dColor.b];
}

function PadNum(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * get hex from r g b
 *
 * @param {array} rgb
 * @returns {string} hex string
 */
export function rgbToHex([r, g, b]) {
  return `#${[r, g, b].map(n => PadNum(n)).join('')}`.toUpperCase();
}

export function getColorArray(color) {
  const dColor = d3Color.color(color);
  return [dColor.r, dColor.g, dColor.b, dColor.opacity * 255]; 
};