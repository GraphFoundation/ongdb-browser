/*
 * Copyright (c) 2018-2020 "Graph Foundation"
 * Graph Foundation, Inc. [https://graphfoundation.org]
 *
 * This file is part of ONgDB.
 *
 * ONgDB is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * Copyright (c) 2002-2020 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
const title = 'Help'
const subtitle = 'What is all this?'
const category = 'browserUiCommands'
const filter = ['help', 'play']
const description = (
  <>
    <p>
      ONgDB Browser is a command shell. Use the editor bar up above ↑ to enter
      Geequel queries or client-side commands. Each command will produce a
      "frame" like this one in the result stream.
    </p>
    <p>
      Use the <code>:help</code> command to learn about other topics.
    </p>
    <p>New to ONgDB? Try one of the guides to learn the basics.</p>
    <table className="table-condensed table-help">
      <tbody>
        <tr>
          <th>Usage:</th>
          <td>
            <code>{':help <topic>'}</code>
          </td>
        </tr>
        <tr>
          <th>Topics:</th>
          <td>
            <a help-topic="geequel">:help geequel</a>{' '}
            <a help-topic="commands">:help commands</a>{' '}
            <a help-topic="keys">:help keys</a>
          </td>
        </tr>
        <tr>
          <th>Guides:</th>
          <td>
            <a play-topic="intro">:play intro</a>{' '}
            <a play-topic="concepts">:play concepts</a>{' '}
            <a play-topic="geequel">:play geequel</a>
          </td>
        </tr>
        <tr>
          <th>Examples:</th>
          <td>
            <a play-topic="movie graph">:play movie graph</a>{' '}
            <a play-topic="northwind graph">:play northwind graph</a>
          </td>
        </tr>
      </tbody>
    </table>
  </>
)

export default { title, subtitle, category, content: null, description, filter }
