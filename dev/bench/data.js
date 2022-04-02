window.BENCHMARK_DATA = {
  "lastUpdate": 1648938887510,
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
          "id": "d5a133b6fc95e365d076e24f859a52fb7460f94b",
          "message": "ci: update gh-pages ref in separate step",
          "timestamp": "2022-04-02T18:32:14-04:00",
          "tree_id": "20602923479f9cdc4eb0e50a36ebe80cde1cdaa8",
          "url": "https://github.com/ibis-project/ibis/commit/d5a133b6fc95e365d076e24f859a52fb7460f94b"
        },
        "date": 1648938884468,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 365029.3828251679,
            "unit": "iter/sec",
            "range": "stddev: 1.9969268542819846e-7",
            "extra": "mean: 2.7395054947643858 usec\nrounds: 637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 170.52830897134206,
            "unit": "iter/sec",
            "range": "stddev: 0.004003789987541368",
            "extra": "mean: 5.864128988507438 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 856043.0878827448,
            "unit": "iter/sec",
            "range": "stddev: 2.022716169935994e-7",
            "extra": "mean: 1.168165497922896 usec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 84.71536186241059,
            "unit": "iter/sec",
            "range": "stddev: 0.00016502348121021968",
            "extra": "mean: 11.804234533332192 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.85101923004413,
            "unit": "iter/sec",
            "range": "stddev: 0.00009920160434554483",
            "extra": "mean: 6.763565142855604 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7076.160204690529,
            "unit": "iter/sec",
            "range": "stddev: 0.00004333404539431722",
            "extra": "mean: 141.31958167610964 usec\nrounds: 2816"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1516.7616380644463,
            "unit": "iter/sec",
            "range": "stddev: 0.00003722812302547659",
            "extra": "mean: 659.2993750000886 usec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 6725955.547590605,
            "unit": "iter/sec",
            "range": "stddev: 5.304592163303079e-9",
            "extra": "mean: 148.67775930483495 nsec\nrounds: 68028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.15078695056305,
            "unit": "iter/sec",
            "range": "stddev: 0.00062551409707112",
            "extra": "mean: 22.64965290697377 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119312.7333923699,
            "unit": "iter/sec",
            "range": "stddev: 4.877527201225835e-7",
            "extra": "mean: 8.381335097834164 usec\nrounds: 32680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5261754.902367503,
            "unit": "iter/sec",
            "range": "stddev: 6.9442221543325674e-9",
            "extra": "mean: 190.05066152928666 nsec\nrounds: 53195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.4037527620572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005950460709168446",
            "extra": "mean: 15.289642532257444 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.5706381607203,
            "unit": "iter/sec",
            "range": "stddev: 0.00015974777546979907",
            "extra": "mean: 9.845364941171779 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1669491.0509813353,
            "unit": "iter/sec",
            "range": "stddev: 2.444462258288882e-8",
            "extra": "mean: 598.9849417954358 nsec\nrounds: 79372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 193.4523444225797,
            "unit": "iter/sec",
            "range": "stddev: 0.004580752135884246",
            "extra": "mean: 5.169231745341827 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1007500.6261502247,
            "unit": "iter/sec",
            "range": "stddev: 6.138627409921567e-8",
            "extra": "mean: 992.5552144033113 nsec\nrounds: 169521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.04064563925394,
            "unit": "iter/sec",
            "range": "stddev: 0.01012026535710561",
            "extra": "mean: 27.746450771426876 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 8816629.444143644,
            "unit": "iter/sec",
            "range": "stddev: 4.661216503249664e-9",
            "extra": "mean: 113.42202894372953 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 874.478124225276,
            "unit": "iter/sec",
            "range": "stddev: 0.00001947938865800408",
            "extra": "mean: 1.143539183311106 msec\nrounds: 731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 818.8504988540125,
            "unit": "iter/sec",
            "range": "stddev: 0.000023463423801566203",
            "extra": "mean: 1.2212241445776824 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.8183972362685,
            "unit": "iter/sec",
            "range": "stddev: 0.00014262408542905583",
            "extra": "mean: 20.91245331914924 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16556714429036268,
            "unit": "iter/sec",
            "range": "stddev: 0.04166783757310385",
            "extra": "mean: 6.0398456727999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 30546.487463902362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014241383985457527",
            "extra": "mean: 32.7369882112216 usec\nrounds: 3563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 395605.927780039,
            "unit": "iter/sec",
            "range": "stddev: 8.345057048118141e-7",
            "extra": "mean: 2.5277679877335157 usec\nrounds: 11508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 21576.20037630694,
            "unit": "iter/sec",
            "range": "stddev: 0.000013413699211829319",
            "extra": "mean: 46.347363417059796 usec\nrounds: 6227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.71403204554676,
            "unit": "iter/sec",
            "range": "stddev: 0.000022219609380214348",
            "extra": "mean: 5.2161022817694604 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 353.27789417489123,
            "unit": "iter/sec",
            "range": "stddev: 0.000048050241309504214",
            "extra": "mean: 2.830632814814468 msec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 65.01019616470144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006780482693449463",
            "extra": "mean: 15.382202469694587 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 92.71766680127014,
            "unit": "iter/sec",
            "range": "stddev: 0.00007309540569380383",
            "extra": "mean: 10.785431024093684 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11793.047936884755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020228823195241085",
            "extra": "mean: 84.79572077989529 usec\nrounds: 4004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 11707.479359161996,
            "unit": "iter/sec",
            "range": "stddev: 0.00000126744489740211",
            "extra": "mean: 85.41548264336026 usec\nrounds: 3918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 4389879.61367972,
            "unit": "iter/sec",
            "range": "stddev: 6.135928932493109e-8",
            "extra": "mean: 227.79667963645412 nsec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 525.6246877552683,
            "unit": "iter/sec",
            "range": "stddev: 0.000013304183213978887",
            "extra": "mean: 1.9024981575172926 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 97.25131875702978,
            "unit": "iter/sec",
            "range": "stddev: 0.000678108684795013",
            "extra": "mean: 10.28263691208522 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1634.048543476549,
            "unit": "iter/sec",
            "range": "stddev: 0.000007281978162964302",
            "extra": "mean: 611.9769232023134 usec\nrounds: 612"
          }
        ]
      }
    ]
  }
}