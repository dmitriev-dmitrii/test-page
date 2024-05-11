// import { expect, test } from 'vitest'
// import {parseUrl} from "../utils/parseUrl.js";
//
// const url = 'https://example.com/path/index.html?param=value&param2=value2#somehash'
//
// test('parseUrl test query', () => {
//     const {query} =    parseUrl(url)
//
//     expect(query).toMatchObject({
//         param:'value',
//         param2:'value2',
//     })
// })
//
//
// test('parseUrl test query', () => {
//     const {query} =    parseUrl('')
//
//     expect(query).toMatchObject({})
// })
//
// test('parseUrl test hash', () => {
//     const {hash} =    parseUrl(url)
//
//     expect(hash).toBe('#somehash')
// })
//
// test('parseUrl test href', () => {
//     const {href} =    parseUrl(url)
//
//     expect(href).toBe(url)
// })