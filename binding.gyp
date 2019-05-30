{
  'targets': [
    {
      'target_name': 'NodeQuickfix',
      'sources': [
        'src1/Threading.h',
        'src1/Dispatcher.h',
      	'src1/FixCredentials.h',
      	'src1/FixEvent.h',
      	'src1/FixEventQueue.h',
      	'src1/FixSession.h',
      	'src1/FixSession.cpp',
      	'src1/FixLogon.h',
      	'src1/FixLoginProvider.h',
      	'src1/FixLoginProvider.cpp',
      	'src1/FixLoginResponse.h',
      	'src1/FixLoginResponse.cpp',
      	'src1/FixAcceptor.h',
      	'src1/FixAcceptor.cpp',
      	'src1/FixAcceptorStartWorker.h',
      	'src1/FixAcceptorStartWorker.cpp',
      	'src1/FixAcceptorStopWorker.h',
      	'src1/FixAcceptorStopWorker.cpp',
      	'src1/FixApplication.h',
      	'src1/FixApplication.cpp',
      	'src1/FixConnection.h',
      	'src1/FixConnection.cpp',
      	'src1/FixInitiator.h',
      	'src1/FixInitiator.cpp',
      	'src1/FixInitiatorStartWorker.h',
      	'src1/FixInitiatorStartWorker.cpp',
      	'src1/FixInitiatorStopWorker.h',
      	'src1/FixInitiatorStopWorker.cpp',
      	'src1/FixMessageUtil.h',
      	'src1/FixSendWorker.h',
      	'src1/FixSendWorker.cpp',
      	'src1/node_quickfix.cpp'
      ],
      'link_settings': {
        'libraries': [
          '-L/usr/lib',
          '-L/usr/local/lib',
          '-lquickfix',
          '-lpthread',
          '-lxml2',
          '-lz'
        ]
      },
      'include_dirs': [
        "<!(node -e \"require('nan')\")",
        '/usr/local/include',
        '/usr/local/include/quickfix'
      ],
      'direct_dependent_settings': {
        'include_dirs': ['src1']
      },
      'cflags': [ '-fexceptions', '-std=c++11' ],
      'cflags!': ['-fno-exceptions', '-fno-rtti'],
      'cflags_cc': [ '-fexceptions' ],
      'cflags_cc!': [ '-fno-exceptions', '-fno-rtti' ],
      'conditions': [
        ['OS=="mac"', {
          'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            'GCC_ENABLE_CPP_RTTI': 'YES',
	    'OTHER_LDFLAGS': [
              '-undefined dynamic_lookup'
            ],
            "OTHER_CFLAGS": ["-mmacosx-version-min=10.7", "-stdlib=libc++"]
          }
        }]
      ]
    }
  ]
}
