import React, { useState } from 'react';
import './Stringlib.css';
import {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
} from '@mikeygough/stringlib';

export default function Stringlib() {
  const [str, setStr] = useState('');

  return (
    <div className="Stringlib">
      <section>
        <input
          id={'strInput'}
          type="text"
          placeholder="hey, there!"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        ></input>
      </section>

      <section>
        <h3>
          capitalize('{str}')
          <span>
            {'=> '}
            {capitalize(str)}
          </span>
        </h3>

        <h3>
          allCaps('{str}')
          <span>
            {'=> '}
            {allCaps(str)}
          </span>
        </h3>

        <h3>
          capitalizeWords('{str}')
          <span>
            {'=> '}
            {capitalizeWords(str)}
          </span>
        </h3>

        <h3>
          removeExtraSpaces('{str}')
          <span>
            {'=> '}
            {removeExtraSpaces(str)}
          </span>
        </h3>

        <h3>
          kebobCase('{str}')
          <span>
            {'=> '}
            {kebobCase(str)}
          </span>
        </h3>

        <h3>
          snakeCase('{str}')
          <span>
            {'=> '}
            {snakeCase(str)}
          </span>
        </h3>

        <h3>
          camelCase('{str}')
          <span>
            {'=> '}
            {camelCase(str)}
          </span>
        </h3>

        <h3>
          shift('{str}')
          <span>
            {'=> '}
            {shift(str)}
          </span>
        </h3>

        <h3>
          makeHashTag('{str}')
          <span>
            {'=> '}
            {makeHashTag(str)}
          </span>
        </h3>

        <h3>
          isEmpty('{str}')
          <span>
            {'=> '}
            {`${isEmpty(str)}`}
          </span>
        </h3>
      </section>
    </div>
  );
}
