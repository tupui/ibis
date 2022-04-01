window.BENCHMARK_DATA = {
  "lastUpdate": 1648850403596,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2202e665eedb4809439264560a3852ea81820c25",
          "message": "chore: remove unused patch",
          "timestamp": "2022-04-01T12:39:31-04:00",
          "tree_id": "0bb2a82050dad4583310981b5e7dce21a28cf5a4",
          "url": "https://github.com/ibis-project/ibis/commit/2202e665eedb4809439264560a3852ea81820c25"
        },
        "date": 1648831758770,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1537.5595505900733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003172364789063014",
            "extra": "mean: 650.3813134367558 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 182.87939573196772,
            "unit": "iter/sec",
            "range": "stddev: 0.00017311134782081289",
            "extra": "mean: 5.468084559212035 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.30229193932696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002657822475548168",
            "extra": "mean: 13.642138240748459 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 368761.03130134864,
            "unit": "iter/sec",
            "range": "stddev: 4.869226526134625e-7",
            "extra": "mean: 2.7117832827157042 usec\nrounds: 646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122244.86389085805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011519204591836826",
            "extra": "mean: 8.180302780596282 usec\nrounds: 36898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 3338372.3548080493,
            "unit": "iter/sec",
            "range": "stddev: 6.421825020332677e-8",
            "extra": "mean: 299.54717260935934 nsec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.51091326496996,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729990936911464",
            "extra": "mean: 11.171822111118482 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19693.16809822773,
            "unit": "iter/sec",
            "range": "stddev: 0.000015336970195148673",
            "extra": "mean: 50.77903133777618 usec\nrounds: 6382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 484.95861916269894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007408520823481697",
            "extra": "mean: 2.062031605349218 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 62.3677102905233,
            "unit": "iter/sec",
            "range": "stddev: 0.0009570676746097203",
            "extra": "mean: 16.033937999996592 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 813016.6838730662,
            "unit": "iter/sec",
            "range": "stddev: 4.005996582541448e-7",
            "extra": "mean: 1.2299870591045914 usec\nrounds: 53474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.65085743971033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709526835410805",
            "extra": "mean: 25.220135567572875 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 10712.681412904438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051565459893287135",
            "extra": "mean: 93.34731067381557 usec\nrounds: 3560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.05073108019482,
            "unit": "iter/sec",
            "range": "stddev: 0.0001554759280239515",
            "extra": "mean: 5.745451304879865 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.95211901643447,
            "unit": "iter/sec",
            "range": "stddev: 0.006590815139522477",
            "extra": "mean: 13.341850945945023 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 389142.2535765277,
            "unit": "iter/sec",
            "range": "stddev: 6.144910877131246e-7",
            "extra": "mean: 2.56975435283422 usec\nrounds: 14244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 26043.644040589486,
            "unit": "iter/sec",
            "range": "stddev: 0.000003109840024990715",
            "extra": "mean: 38.39708446488833 usec\nrounds: 2948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1340371709821613,
            "unit": "iter/sec",
            "range": "stddev: 0.03723425087003634",
            "extra": "mean: 7.460617026399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.18342553008353,
            "unit": "iter/sec",
            "range": "stddev: 0.00026194887151752825",
            "extra": "mean: 10.731522202702863 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.6397050478358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786892525152679",
            "extra": "mean: 1.3304246612894912 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1170304.5899643057,
            "unit": "iter/sec",
            "range": "stddev: 3.136447295816407e-7",
            "extra": "mean: 854.478405515354 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 307.49283276292294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847135095221366",
            "extra": "mean: 3.252108320752309 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6194.380274572146,
            "unit": "iter/sec",
            "range": "stddev: 0.00005075623379053042",
            "extra": "mean: 161.43664994301164 usec\nrounds: 2631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.71402580127961,
            "unit": "iter/sec",
            "range": "stddev: 0.0012664561318591599",
            "extra": "mean: 24.561560305553737 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 164.4204639023999,
            "unit": "iter/sec",
            "range": "stddev: 0.00025836780117650737",
            "extra": "mean: 6.08196800000273 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 7233676.102855893,
            "unit": "iter/sec",
            "range": "stddev: 1.4649568510599878e-8",
            "extra": "mean: 138.24229697059226 nsec\nrounds: 58477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.051269278588045,
            "unit": "iter/sec",
            "range": "stddev: 0.000772929902042319",
            "extra": "mean: 16.115705796610815 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.4437935748706,
            "unit": "iter/sec",
            "range": "stddev: 0.00018993875449271183",
            "extra": "mean: 7.069946122950025 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5702332.790703137,
            "unit": "iter/sec",
            "range": "stddev: 1.730965976586976e-8",
            "extra": "mean: 175.36682559647642 nsec\nrounds: 61725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11117.070850953181,
            "unit": "iter/sec",
            "range": "stddev: 0.000005793625127199813",
            "extra": "mean: 89.95175198638404 usec\nrounds: 6169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 966534.9773401035,
            "unit": "iter/sec",
            "range": "stddev: 1.829586020647977e-7",
            "extra": "mean: 1.034623705758048 usec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4245404.796450618,
            "unit": "iter/sec",
            "range": "stddev: 4.2466522837703864e-8",
            "extra": "mean: 235.5487987474899 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 726.7955843202369,
            "unit": "iter/sec",
            "range": "stddev: 0.00003138922622149807",
            "extra": "mean: 1.3759026906241978 msec\nrounds: 640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.42868087282817,
            "unit": "iter/sec",
            "range": "stddev: 0.0012402206926885387",
            "extra": "mean: 28.22571925806429 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1339.7393190514833,
            "unit": "iter/sec",
            "range": "stddev: 0.00003709011533919282",
            "extra": "mean: 746.4138625923034 usec\nrounds: 131"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a0f3bd96b2112454ba5431df4f5073de4a7954b0",
          "message": "fix(dask): workaround dask bug",
          "timestamp": "2022-04-01T17:56:29-04:00",
          "tree_id": "18eed2682f679e3884af7dd1a28a7885376388ea",
          "url": "https://github.com/ibis-project/ibis/commit/a0f3bd96b2112454ba5431df4f5073de4a7954b0"
        },
        "date": 1648850400728,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.46379364063576,
            "unit": "iter/sec",
            "range": "stddev: 0.005407691416905492",
            "extra": "mean: 11.177706190471511 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119269.36605768226,
            "unit": "iter/sec",
            "range": "stddev: 4.115662061712348e-7",
            "extra": "mean: 8.384382621069436 usec\nrounds: 33558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.0430671108563,
            "unit": "iter/sec",
            "range": "stddev: 0.00010585096662361745",
            "extra": "mean: 5.261965170329933 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.91791200228502,
            "unit": "iter/sec",
            "range": "stddev: 0.00003579645277598301",
            "extra": "mean: 6.455031487806589 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 30323.50979365074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013317852317247953",
            "extra": "mean: 32.9777128968555 usec\nrounds: 1954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 404527.42375284183,
            "unit": "iter/sec",
            "range": "stddev: 2.2306192050253585e-7",
            "extra": "mean: 2.472020291536477 usec\nrounds: 15129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 789.2745108743194,
            "unit": "iter/sec",
            "range": "stddev: 0.000056313329744898054",
            "extra": "mean: 1.2669863098610004 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 3973063.9656055057,
            "unit": "iter/sec",
            "range": "stddev: 6.55361526153057e-8",
            "extra": "mean: 251.69491572673365 nsec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11705.8872577245,
            "unit": "iter/sec",
            "range": "stddev: 0.000011169646552205159",
            "extra": "mean: 85.42709988430126 usec\nrounds: 7759"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1647.8270787654901,
            "unit": "iter/sec",
            "range": "stddev: 0.000005801203023332109",
            "extra": "mean: 606.8597930489007 usec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 8771660.778305065,
            "unit": "iter/sec",
            "range": "stddev: 4.239459190633026e-9",
            "extra": "mean: 114.00349663238569 nsec\nrounds: 72464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1029880.1073803278,
            "unit": "iter/sec",
            "range": "stddev: 7.442862380816567e-8",
            "extra": "mean: 970.9868098561462 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 208.50996761539943,
            "unit": "iter/sec",
            "range": "stddev: 0.00010009444500928006",
            "extra": "mean: 4.795933793652104 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 87.36191454446887,
            "unit": "iter/sec",
            "range": "stddev: 0.00013897649762448762",
            "extra": "mean: 11.44663558730711 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 70.47476296622297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005759518568592025",
            "extra": "mean: 14.1894766000033 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 11101.66077261526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016532674226212192",
            "extra": "mean: 90.07661290342473 usec\nrounds: 806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 21177.962258075408,
            "unit": "iter/sec",
            "range": "stddev: 0.000011824380734945125",
            "extra": "mean: 47.21889612484733 usec\nrounds: 6864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.4064149494674,
            "unit": "iter/sec",
            "range": "stddev: 0.00034726787939390975",
            "extra": "mean: 9.310430857137167 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 91.53517920691023,
            "unit": "iter/sec",
            "range": "stddev: 0.00005978664201086971",
            "extra": "mean: 10.924761481479763 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 181.45373214709312,
            "unit": "iter/sec",
            "range": "stddev: 0.00018235356681256334",
            "extra": "mean: 5.511046745455546 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.93043489720709,
            "unit": "iter/sec",
            "range": "stddev: 0.0009240286644717398",
            "extra": "mean: 20.437177844439702 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1676727.2465607428,
            "unit": "iter/sec",
            "range": "stddev: 2.181890994198837e-8",
            "extra": "mean: 596.3999225582446 nsec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5217018.986476977,
            "unit": "iter/sec",
            "range": "stddev: 5.822152802386277e-9",
            "extra": "mean: 191.68034515341816 nsec\nrounds: 51021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 876196.7931409802,
            "unit": "iter/sec",
            "range": "stddev: 1.4433069452296108e-7",
            "extra": "mean: 1.1412961195797253 usec\nrounds: 66230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16382936362958966,
            "unit": "iter/sec",
            "range": "stddev: 0.025077957238500793",
            "extra": "mean: 6.103911886399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 6746604.845021276,
            "unit": "iter/sec",
            "range": "stddev: 5.08602534567748e-9",
            "extra": "mean: 148.22270208069608 nsec\nrounds: 69935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 365972.9988986437,
            "unit": "iter/sec",
            "range": "stddev: 4.0516769191964713e-7",
            "extra": "mean: 2.732442018972417 usec\nrounds: 733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7011.147480184924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004184918602784953",
            "extra": "mean: 142.6300049779618 usec\nrounds: 3013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.04364616829693,
            "unit": "iter/sec",
            "range": "stddev: 0.00029914679148612574",
            "extra": "mean: 20.81440689361917 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1602.6117950730911,
            "unit": "iter/sec",
            "range": "stddev: 0.000011321196099647877",
            "extra": "mean: 623.9814302342586 usec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 870.1231871349802,
            "unit": "iter/sec",
            "range": "stddev: 0.000017856592484839232",
            "extra": "mean: 1.1492625582047296 msec\nrounds: 713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 330.6968010142845,
            "unit": "iter/sec",
            "range": "stddev: 0.003661610492906536",
            "extra": "mean: 3.023917972393101 msec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.78313493788731,
            "unit": "iter/sec",
            "range": "stddev: 0.0004523370234418533",
            "extra": "mean: 13.19554807041977 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.480168960503065,
            "unit": "iter/sec",
            "range": "stddev: 0.0009775766931203328",
            "extra": "mean: 24.10790565853742 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 520.4001546761097,
            "unit": "iter/sec",
            "range": "stddev: 0.000013825840345885233",
            "extra": "mean: 1.9215981990289515 msec\nrounds: 412"
          }
        ]
      }
    ]
  }
}