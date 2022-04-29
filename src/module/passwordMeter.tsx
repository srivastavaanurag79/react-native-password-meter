/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect } from 'react';
import { Text, View } from 'react-native';
var zxcvbn = require('zxcvbn');
import { strengthLabel } from './../utils/password-meter.utils';
import ProgressBar from 'react-native-animated-progress';
import type { meter } from 'src/interface/meter.interface';

const PasswordMeter = ({ password, onResult }: meter) => {
  const { feedback, score } = zxcvbn(password);
  const { suggestions, warning } = feedback;

  useEffect(() => {
    onResult(score);
  }, [score]);

  //   onResult(score);
  return (
    <View style={{ flex: 1, width: '100%' }}>
      {password.length > 0 ? (
        <View style={{ marginVertical: 10, width: '100%' }}>
          <ProgressBar
            progress={strengthLabel(score).value * 100}
            backgroundColor={strengthLabel(score).color}
            height={6}
            animated={true}
          />
          <Text
            style={{
              color: strengthLabel(score).color,
              fontSize: 14,
              alignSelf: 'flex-end',
              fontWeight: 'bold',
            }}
          >
            {strengthLabel(score).text}
          </Text>
          {warning.length > 0 || suggestions.length > 0 ? (
            <View
              style={{
                backgroundColor: '#f2f2f2',
                padding: 10,
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              {warning.length > 0 && (
                <Text
                  style={{
                    color: '#D0421B',
                    fontSize: 13,
                  }}
                >
                  {warning}
                </Text>
              )}
              {suggestions.length > 0 && (
                <View style={{ marginTop: 10 }}>
                  {suggestions.map((text: any, key: any) => {
                    return (
                      <Text style={{ color: '#262626' }} key={key}>
                        {key + 1}. {text}
                      </Text>
                    );
                  })}
                </View>
              )}
            </View>
          ) : (
            <Text style={{ display: 'none' }} />
          )}
        </View>
      ) : (
        <Text style={{ display: 'none' }} />
      )}
    </View>
  );
};

export default memo(PasswordMeter);
